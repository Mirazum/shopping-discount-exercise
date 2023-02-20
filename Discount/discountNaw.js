document.getElementById('btn-apply').addEventListener('click',function(){
const textPrice=document.getElementById('text-price');
const textStringPrice=textPrice.innerText;
const textValue=parseFloat(textStringPrice)
const discountPrice=(textValue*30)/100;
const newPrice=textValue-discountPrice;
document.getElementById('text-pleasePay').innerText=newPrice;
})

document.getElementById('btn-apply2').addEventListener('click',function(){
    const textPrice=document.getElementById('text-price2');
    const textStringPrice=textPrice.innerText;
    const textValue=parseFloat(textStringPrice)
    const disCode=document.getElementById('coupon-code');
    const disStringCode=disCode.value ;
    
    
    if(disStringCode==='DISC30'){
        const discountPrice=(textValue*30)/100;
        const newPrice=textValue-discountPrice;
        document.getElementById('text-pleasePay2').innerText=newPrice;
        
    }
    else{
        alert('Given code is not valid. Please try again or pay 1000/=.')
        const discountPrice=0;
    const newPrice=textValue-discountPrice;
    document.getElementById('text-pleasePay2').innerText=newPrice;
    }
    disCode.value=' ';
   
    
   

    })