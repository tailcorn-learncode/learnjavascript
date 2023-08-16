export default () => ({
    boxes: null,
    async init() {
        this.boxes = await this.getboxes('users','relationship_status',data.relationship_status);
    },
    async lightbox1slide3done() {
        this.data.relationship_status = boxes.find((v) => v.value).text;
        await this.saveAbout();
        this.slide3 = false; 
        this.lightbox1 = false; 
        this.progress = [{ status: 'current' }, { status: 'next' }, { status: 'next' }]; 
        this.pos = 0.1; 
        await this.loadData(); 
        this.lightbox1 = false;
    }
})