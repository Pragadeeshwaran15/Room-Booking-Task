const homePage=(req,res)=>{
    res.status(200).send(`
     <h1>Hall Booking Task</h1>
    <ul>
    <li>To see all Booked rooms endpoint:"/room/bookedrooms"</li>
    <li>To see all customer with booked data endpoint:"/room/allcustomer" </li>
    <li>To see how many time customer booked room endpoint
    </li>
    </ul>
    
    `)
}

export default {homePage}