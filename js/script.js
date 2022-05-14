// hamma thumbnail klasslarni olish
const thumbnails = document.getElementsByClassName("thumbnail");
// active elementni olish
const activeItems = document.getElementsByClassName("active");

// thumbnails obyektni ichidagi har bir elementni olish
for (let i = 0; i < thumbnails.length; i++) {
	const thumbnail = thumbnails[i];
	thumbnail.addEventListener("mouseover", function(event) {
		if (activeItems.length > 0) {
			// active class bor bo'lgan elementdan active classni o'chirish
			activeItems[0].classList.remove("active")
		}
		// hover qilganda active class qo'shish
		thumbnail.classList.add("active")

		let thumbnailChild = document.getElementById("featured").children[0];
		thumbnailChild.src = thumbnail.children[0].src;

	})
}

