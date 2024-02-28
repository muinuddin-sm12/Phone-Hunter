const loadPhone = async(searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones)
    displayPhone(phones);
}


const displayPhone = phones => {
    const phoneContainer = document.getElementById('card-container');
    phoneContainer.textContent = '';

    const showAllContainer = document.getElementById('show-all-container');
    if(phones.length > 12){
        showAllContainer.classList.remove('hidden');
    }else{
        showAllContainer.classList.add('hidden');
    }

    // display only first 12 phones
    phones = phones.slice(0, 12);

    phones.forEach(phone => {
        // console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList = `p-6 rounded-lg bg-white text-center flex flex-col items-center border-2 border-[#CFCFCF]`;
        phoneCard.innerHTML = `
            <div class="w-full py-6 bg-[#0D6EFD0D] rounded-lg flex items-center justify-center">
                <img src="${phone.image}" alt="">
            </div>
            <h3 class="text-xl font-bold mb-5">${phone.phone_name}</h3>
            <p class="text-lg mb-2">There are many variations of passages of available</p>
            <span class="text-2xl font-bold mb-3">$999</span>
            <button class="py-2 px-5 bg-[#0D6EFD] rounded-lg text-white font-semibold text-xl">Show Details</button>
        `
        phoneContainer.appendChild(phoneCard);
    });

    // hide loading spinner
    toggleLoadingSpinner(false);
}

const searchHandle = () => {
    toggleLoadingSpinner(true);

    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText)
    loadPhone(searchText);
}

const toggleLoadingSpinner = (isLoading) => {
    const lodingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
        lodingSpinner.classList.remove('hidden');
    }else{
        lodingSpinner.classList.add('hidden');
    }
}

loadPhone()