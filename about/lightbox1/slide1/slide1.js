export default () => ({
    issubmit: null,
    dd: null,
    mm: null,
    yyyy: null,
    async init() {
        this.dd = this.data.dob.split('-')[2];
        this.mm = this.data.dob.split('-')[1];
        this.yyyy = this.data.dob.split('-')[0];
    },
    async lightbox1slide1done() {
        this.issubmit = true;

        if (!this.data.first_name || !this.data.last_name || !this.data.email || !this.dd || !this.mm || !this.yyyy) {
            return true;
        }

        this.data.dob = `${this.yyyy}-${this.mm}-${this.dd}`;

        this.slide1 = false; 
        this.slide2 = true; 
        this.router.push('/about/lightbox1/slide2'); 
        this.progress[0].status = 'done'; 
        this.progress[1].status = 'current'; 
        this.pos = 1
    }
})