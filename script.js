// Select all the images
let images = document.getElementsByClassName("image")
images = [...images];
// Add event listeners for drag and drop
images.forEach(image => {
    // When drag starts, store the source image's id in the dataTransfer object
    image.addEventListener("dragstart", (event)=>{
        event.dataTransfer.setData('text', event.target.id);
    })
    // When dragging over an image, allow dropping
    image.addEventListener("dragover", (event)=>{
        event.preventDefault();
    })
    // When the image is dropped, swap the positions
    image.addEventListener("drop", (event)=>{
        const draggedImageId = event.dataTransfer.getData("text");
        const draggedImage = document.getElementById(draggedImageId);

        const targetImage = event.target;

        const tempId = targetImage.id;
        const tempText = targetImage.textContent;

        // Swap the content (id and text) between the dragged and target divs
        targetImage.id = draggedImage.id;
        targetImage.textContent = draggedImage.textContent;

        draggedImage.id = tempId;
        draggedImage.textContent = tempText;


    })
    // Optional: Reset the opacity of the image when dragging ends
    // image.addEventListener("dragend", (event)=>{
    //     event.target.style.opacity = "1";
    // })
});
