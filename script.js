function initVue() {
  console.log("Hello World");
    new Vue({
      el: "#app",
      data: {
        imgs: [
          "img/img1.jpg",
          "img/img2.jpg",
          "img/img3.jpg",
          "img/img4.jpg"
        ],
        activeIndex: 0
      },
      methods: {
        prevImg: function(){
          this.activeIndex--;
          if(this.activeIndex < 0) {
            this.activeIndex = this.imgs.length - 1;
          }
        },
        nextImg: function() {
          this.activeIndex++;
          if(this.activeIndex >= this.imgs.length) {
            this.activeIndex = 0;
          }
        }
      },
      mounted: function() {
        setInterval(() => {
        this.nextImg();
      }, 3000);
    }
  });
}
function init() {
  initVue();
}
document.addEventListener("DOMContentLoaded", init);
