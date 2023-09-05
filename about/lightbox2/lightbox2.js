export default () => ({
    pos:0.1, 
    slide1: true, 
    slide2: false, 
    slide3: false, 
    progress: [{status:'current'},{status:'next'}],
    async init() {
        this.router.push('/about/lightbox2/slide1');
    },
    async lightbox1save() {
        this.data.about_done=true; 
        await this.directus.items('users').updateOne(this.data.id,this.data);
        this.slide3=false;
        this.lightbox1=false;
        this.progress= [{status:'current'},{status:'next'},{status:'next'}];
        pos=0.1;
    }
})