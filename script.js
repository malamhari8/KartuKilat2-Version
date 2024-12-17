const menu = document.getElementById("menu");
const left = document.getElementById("left");
const right = document.getElementById("right");
const listTitle = document.querySelectorAll(".list-title");

const homeBtn = document.getElementById("home-btn");
const folderBtn = document.getElementById("folder-btn");

const home = document.getElementById("home");
const folder = document.getElementById("folder");

const newFlashcard = document.getElementById("new-flashcard");
const closeFlashcard = document.getElementById("close-flashcard-input")
const flashcardInput = document.getElementById("add-flashcard-input");
const submit = document.getElementById("submit");

menu.addEventListener("click", () => {
    left.classList.toggle("minimized");
    listTitle.forEach(element => {
        element.classList.toggle("invisible");
    });
});

homeBtn.addEventListener("click", () => {
    home.style.display = "block";
    folder.style.display = "none";
})

folderBtn.addEventListener("click", () => {
    folder.style.display = "block";
    home.style.display = "none";
})

// Untuk menambahkan flashcard di menu home
newFlashcard.addEventListener("click", () => {
    flashcardInput.classList.add("reveal");
});

closeFlashcard.addEventListener("click", () => {
    flashcardInput.classList.remove("reveal");
});

// Menambahkan flash-box di menu home
// submit.addEventListener("click", () => {
//     const flashWrapper = document.getElementById("flash-wrapper");
//     const createFlash = document.createElement("div");
//     const createTitle = document.createElement("h4");
//     const createDescription = document.createElement("p");

//     const inputTitle = document.getElementById("title");
//     const inputDescription = document.getElementById("description");

//     createFlash.className = "flash h-full mr-8 p-8 ";
//     createTitle.innerHTML = inputTitle.value;
//     createTitle.className = "font-semibold text-xl mb-2";
//     createDescription.className = "font-medium";
//     createDescription.innerHTML = inputDescription.value;

//     flashWrapper.appendChild(createFlash);
//     createFlash.appendChild(createTitle);
//     createFlash.appendChild(createDescription);

//     flashcardInput.classList.remove("reveal");

//     inputTitle.value = "";
//     inputDescription.value = "";
// });

// Coba-coba

function firstFlash() {
    const flash = document.querySelector(".flash[data-pair-id='12345']");

    flash.addEventListener("click", () => {
        const pairedContent = document.querySelector(".flashcard[data-pair-id='12345']");

        if (pairedContent) {
            pairedContent.classList.remove("hidden");
        };
    });

    const backHome = document.querySelector(".back-home");

    backHome.addEventListener("click", () => {
        const pairedContent = document.querySelector(".flashcard[data-pair-id='12345']");

        pairedContent.classList.add("hidden");
    });

};

firstFlash();


// HHHHAAAAAAAAAaaaaaaa.......
submit.addEventListener("click", () => {

    const inputTitle = document.getElementById("title");
    const inputDescription = document.getElementById("description");
    const uniqueId = Date.now();  // Membuat ID unik menggunakan timestamp

    const flashDuplicate = document.querySelector('.flash[data-pair-id="12345"]');  // Mencari elemen asli yang akan diduplikat
    const duplicate = flashDuplicate.cloneNode(true);

    function addFlashHome() {
        const flashWrapper = document.getElementById("flash-wrapper");
        const flashTitle = duplicate.querySelector("[data-title='123']"); // Mencari elemen yang akan diubah dalam duplikat

        duplicate.setAttribute('data-pair-id', uniqueId);  // Menambahkan ID unik pada duplikat

        flashTitle.innerHTML = inputTitle.value;

        const addFlashcardInput = document.getElementById("add-flashcard-input");
        addFlashcardInput.classList.remove("reveal");

        flashWrapper.appendChild(duplicate);
    }

    addFlashHome();

    // Duplicate halaman flashcard //
    const flashcard = document.querySelector(".flashcard[data-pair-id='12345']");
    const flashcardCopy = flashcard.cloneNode(true);

    function addFlashcardPage() {
        home.appendChild(flashcardCopy);
    }

    addFlashcardPage();


    function flashcardPage() {
        const backHome = flashcardCopy.querySelector(".back-home");

        const flashcardTitle = flashcardCopy.querySelector("[data-flashcard-title='123']");
        const flashcardDescription = flashcardCopy.querySelector("[data-flashcard-description='123']");

        flashcardTitle.innerHTML = inputTitle.value;
        flashcardDescription.innerHTML = inputDescription.value;

        inputTitle.value = "";
        inputDescription.value = "";

        backHome.addEventListener("click", () => {
            flashcardCopy.classList.add("hidden");
        });

        // fungsi untuk menampilkan mode lebar kartu kilat.
        function fullCard() {
            const fullFlash = flashcardCopy.querySelector(".full-flash");

            fullFlash.addEventListener("click", () => {
                const carouselInner = flashcardCopy.querySelector(".carousel-inner");
                const cards = flashcardCopy.querySelectorAll(".card");
                const explanation = flashcardCopy.querySelector(".explanation");
                const addTermWrapper = flashcardCopy.querySelector(".add-term-wrapper");

                cards.forEach(card => {
                    card.classList.toggle("full");
                });

                carouselInner.classList.toggle("full");
                explanation.classList.toggle("hidden");
                addTermWrapper.classList.toggle("hidden");

            });
        };

        fullCard();

        // Mengisi kartu flashcard.
        function addCardContent() {
            const front = flashcardCopy.querySelector(".front")
            const back = flashcardCopy.querySelector(".back");

            const inputTerm = flashcardCopy.querySelector(".input-term");
            const inputExplanation = flashcardCopy.querySelector(".input-explanation");

            inputTerm.addEventListener("input", () => {
                front.innerHTML = inputTerm.value;
            });

            inputExplanation.addEventListener("input", () => {
                back.innerHTML = inputExplanation.value;
            });
        }

        addCardContent();

        // Agar tombol slider flashcard dari bootstrap bisa dipakai.
        function cardSlider() {
            const flashcardSlider = flashcardCopy.querySelector(".flashcard-slider");
            const uniqueClass = 'carousel-' + Date.now();

            const nextBtn = flashcardCopy.querySelector(".carousel-control-next");
            const prevBtn = flashcardCopy.querySelector(".carousel-control-prev");

            flashcardSlider.classList.add(uniqueClass);
            nextBtn.setAttribute('data-bs-target', '.' + uniqueClass);
            prevBtn.setAttribute('data-bs-target', '.' + uniqueClass);
        }

        cardSlider();

        // Menambahkan duplikat card dan mengisi konten duplikat card
        const addFlash = flashcardCopy.querySelector(".add-flash");

        addFlash.addEventListener("click", () => {
            const addTermWrapper = flashcardCopy.querySelector(".add-term-wrapper");
            const addTermBox = flashcardCopy.querySelector(".add-term-box");

            const addTerm = flashcardCopy.querySelector(".add-term");
            const addTermCopy = addTerm.cloneNode(true);

            const uniquePairId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

            addTermBox.insertAdjacentElement('beforebegin', addTermCopy);


            const carouselItem = flashcardCopy.querySelector(".carousel-item");
            const carouselInner = flashcardCopy.querySelector(".carousel-inner");
            const carouselItemCopy = carouselItem.cloneNode(true);

            const frontCard = carouselItemCopy.querySelector(".front");
            const backCard = carouselItemCopy.querySelector(".back");

            const inputTermCopy = addTermCopy.querySelector(".input-term");
            const inputExplanationCopy = addTermCopy.querySelector(".input-explanation");

            let inputCard = [inputTermCopy, inputExplanationCopy];
            inputCard.forEach(input => input.value = "");

            inputTermCopy.addEventListener("input", () => {
                frontCard.textContent = inputTermCopy.value;
            });

            inputExplanationCopy.addEventListener("input", () => {
                backCard.textContent = inputExplanationCopy.value;
            });

            frontCard.setAttribute('data-pair-id', uniquePairId);
            backCard.setAttribute('data-pair-id', uniquePairId);

            carouselItem.classList.remove("active");
            frontCard.textContent = '';
            backCard.textContent = '';

            carouselInner.appendChild(carouselItemCopy);

            function sequenceCard() {
                const noSequence = addTermCopy.querySelector(".no-sequence");
                const removeAddTerm = addTermCopy.querySelector(".bx-trash-alt");
                const sumAddterm = addTermWrapper.querySelectorAll(".add-term");

                function updateSumTerm() {
                    const flashDescription = duplicate.querySelector("[data-description='123']");
                    const totalAddterm = addTermWrapper.querySelectorAll(".add-term");

                    flashDescription.innerHTML = `${totalAddterm.length}` + ` Istilah`;
                };

                updateSequenceNumbers()

                noSequence.textContent = sumAddterm.length;

                function updateSequenceNumbers() {
                    const addTermWrapper = flashcardCopy.querySelector(".add-term-wrapper");
                    const allAddTerms = addTermWrapper.querySelectorAll(".add-term");

                    // Loop melalui semua .add-term dan perbarui nomor urut
                    allAddTerms.forEach((term, index) => {
                        const noSequence = term.querySelector(".no-sequence");
                        noSequence.textContent = index + 1; // Nomor urut dimulai dari 1
                    });
                }

                removeAddTerm.addEventListener("click", () => {
                    addTermCopy.remove();
                    carouselItemCopy.remove();
                    updateSequenceNumbers()
                    updateSumTerm();
                });

                updateSumTerm();
            }

            sequenceCard();

        });
    }

    flashcardPage();

    const closeDuplicate = duplicate.querySelector(".bx-x[data-pair-id='10']");

    duplicate.addEventListener("click", (event) => {
        if (event.target !== closeDuplicate) {
            flashcardCopy.classList.remove("hidden");
        };
    });

    closeDuplicate.addEventListener("click", (e) => {
        if (!confirm('Apakah Anda yakin ingin menghapus elemen ini?')) {
            return;
        }

        duplicate.remove();
        flashcardCopy.remove();
    });

});

localStorage();