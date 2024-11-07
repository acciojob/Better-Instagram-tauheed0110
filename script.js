//your code here
// Select all the images
let images = document.getElementsByClassName("image")
images = [...images];
// Add event listeners for drag and drop
images.forEach(image => {
    // When drag starts, store the source image's id in the dataTransfer object
    image.addEventListener("dragstart", (event)=>{
        event.dataTransfer.setData('text', event.target.id);
        event.target.style.opacity = "0.5";
    })
    // When dragging over an image, allow dropping
    image.addEventListener("dragover", (event)=>{
        event.preventDefault();
    })
    // When the image is dropped, swap the positions
    image.addEventListener("drop", (event)=>{
        const draggedImageId = event.dataTransfer.getData("text");
        const draggedImage = document.getElementById(draggedImageId);

        // swap the elements;
        const targetElement = event.target;
        const temp = targetElement;
        targetElement.id = draggedImage.id;
        draggedImage.id = temp.id;

    })
    // Optional: Reset the opacity of the image when dragging ends
    image.addEventListener("dragend", (event)=>{
        event.target.style.opacity = "1";
    })
});
