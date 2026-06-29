document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("certificateModal");

    modal.addEventListener("click", function(e){

        if(e.target === modal){
            closeCertificate();
        }

    });

});

function openCertificate(imagePath){

    const modal = document.getElementById("certificateModal");
    const img = document.getElementById("fullCertificate");

    img.src = imagePath;
    modal.style.display = "flex";
}

function closeCertificate(){

    document.getElementById("certificateModal").style.display = "none";

}