export default () => ({
    async lightbox1slide2done() {
        this.slide2=false;
        this.slide3=true;
        this.router.push('/about/lightbox1/slide3');
        this.progress[1].status='done';
        this.pos=2;
    }
})