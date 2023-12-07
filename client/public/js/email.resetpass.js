


const sendEmail = async ()=>{
    const base_url='https://ecommercenodejs-production.up.railway.app'
    
        try {
            const response = await fetch(`${url_base}/api/notifications/mail`, {
                method: 'GET',
            });
            const data = await response.json();
            console.log(JSON.stringify(data,null,2)); // Respuesta del servidor
            alert(data.msg)
        } catch (error) {
            console.error(error);
        }
    
    
}
