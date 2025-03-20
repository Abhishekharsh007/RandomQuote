// copy clipborad onclick button  
function copyii(params) {
    const ele1 = document.getElementById('quotei').textContent
    const ele2 = document.getElementById('authori').textContent
    const str = ele1 + " " + ele2;
    navigator.clipboard.writeText(str);
}

// fetch
async function fetchu() {
    try {
        const res = await fetch('https://api.freeapi.app/api/v1/public/quotes/quote/random');
        const data = await res.json();
        if (data.success && data.data) {
            document.getElementById('quotei').textContent = `"${data.data.content}"`;
            document.getElementById('authori').textContent = `- ${data.data.author || 'Unknown'}`;
        } else {
            document.getElementById('quotei').textContent = 'Failed to fetch quote.';
            document.getElementById('authori').textContent = '';
        }
    } catch(error) {
        document.getElementById('quotei').textContent = 'An error occurred. Please try again later.';
        document.getElementById('authori').textContent = '';
    }    
}

// render the quote and author 
fetchu();