window.onload = function () {
    console.log("test1");
    setTimeout(function(){
        console.log("test2");
        var preloader=document.getElementById('page-preloader');
        console.log(preloader);
        if(!preloader.classList.contains('done')){
            console.log("test3");
            preloader.classList.add('done')
            console.log("test4");
        }
    },1000)
}