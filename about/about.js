const apiUrl = 'https://api.scgscorp.com';
// const apiUrl = 'http://localhost:3000';
const assetsUrl = 'https://wills.wonderfulglacier-cf6e4171.uksouth.azurecontainerapps.io/assets';

export default () => ({
    pageVideoUrl: null,
    isAddressFocused: false,
    isSpouseAddressFocused: false,
    addressOptions: [],
    spouseAddressOptions: [],
    init() {
        this.getPageVideo();
    },
    async getPageVideo() {
        const pageMediaRes = await this.directus.items('page_media').readByQuery({
            filter: {
                page_title: 'about-you',
            },
            limit: -1
        });
        const videoId = pageMediaRes.data?.[0]?.video;
        this.pageVideoUrl = videoId ? `${assetsUrl}/${videoId}` : '';
    },
    async getAddressPredictions(term) {
        this.data.address = term;
        const url = `${apiUrl}/rocktons/search-address?term=${term}`;
        const addressRes = await fetch(url, { method: 'GET' }).then((response) => response.json());
        const addresses = addressRes?.Results ?? [];
        this.addressOptions = addresses.map(addr => ({ value: addr.label, label: addr.label }));
    },
    async getSpouseAddressPredictions(term) {
        this.data.spouse_address = term;
        const url = `${apiUrl}/rocktons/search-address?term=${term}`;
        const addressRes = await fetch(url, { method: 'GET' }).then((response) => response.json());
        const addresses = addressRes?.Results ?? [];
        this.spouseAddressOptions = addresses.map(addr => ({ value: addr.label, label: addr.label }));
    },
    changeAddress(addr) {
        this.data.address = addr;
    },
    changeSpouseAddress(addr) {
        this.data.spouse_address = addr;
    },
    async saveAbout() {
        this.data.relationship_status = this.boxes.find((v) => v.value).text;
        this.data.about_done = true;
        let aboutobj = {
            first_name: this.data.first_name,
            middle_name: this.data.middle_name,
            last_name: this.data.last_name,
            email: this.data.email,
            dob: this.data.dob,
            address: this.data.address,
            relationship_status: this.data.relationship_status
        }
        await this.directus.items('users').updateOne(this.data.id, aboutobj);
        this.addressOptions = [];
    },
    async saveSpouse() {
        this.data.relationship_status = this.boxes.find((v) => v.value).text;
        this.data.spouse_done = true;
        let spouseobj = {
            spouse_first_name: this.data.spouse_first_name,
            spouse_middle_name: this.data.spouse_middle_name,
            spouse_last_name: this.data.spouse_last_name,
            spouse_email: this.data.spouse_email,
            spouse_dob: this.data.spouse_dob,
            spouse_address: this.data.spouse_address,
            spouse_relationship_status: this.data.spouse_relationship_status
        }
        await this.directus.items('users').updateOne(this.data.id, spouseobj);
        this.spouseAddressOptions = [];
    },
    async completed() {    
        this.data.about_status = 'completed';    
        await this.directus.items('users').updateOne(this.data.id, {about_status: this.data.about_status});
    }
})