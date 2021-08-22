document.querySelector('.select-wrapper').addEventListener('click', function() {
    this.querySelector('.select').classList.toggle('open');
    this.classList.toggle('active');
});

for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.select').querySelector('.select__trigger span').textContent = this.textContent;
        }
    });
}

window.addEventListener('click', function(e) {
    const select = document.querySelector('.select');
    const selectWrapper = document.querySelector('.select-wrapper');
    if (!select.contains(e.target)) {
        select.classList.remove('open');
        selectWrapper.classList.remove("active");
    }
});


for (const dropdown of document.querySelectorAll('.dropdown__trigger')) {
    dropdown.addEventListener('click', function() {
        this.parentElement.classList.toggle('open');
        this.parentElement.classList.toggle('active');
        // this.classList.toggle('active');
    });
}

window.addEventListener('click', function(e) {
    for (const dropdown of document.querySelectorAll('.dropdown__trigger')) {
        if (!dropdown.contains(e.target)) {
            dropdown.parentElement.classList.remove('open');
            dropdown.parentElement.classList.remove("active");
        }
    }
});