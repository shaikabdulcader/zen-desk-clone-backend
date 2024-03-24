import sgMail from '@sendgrid/mail'

const sendMail = async(email,html,subject)=>{

    // sgMail.setApiKey(process.env.SG_API_KEY)
    
    // const msg = {
    //     to: email, // Change to your recipient
    //     from: process.env.FROM_EMAIL, // Change to your verified sender
    //     subject: subject,
    //     text: html,
    //     html: html,
    //   }
    //   sgMail
    //     .send(msg)
    //     .then(() => {
    //       console.log('Email sent')
    //     })
    //     .catch((error) => {
    //       console.error(error)
    //     })

}

const welcomeEmail = async ({no,name,email,mobile,category,title,description,status,createdAt})=>{
    let subject = `${no}: Your Request is Received`
    let html = `<div> 
    <div>
        <p>Dear ${name}, <br>
            Your service request is created and the refrence no is ${no}. You can check your status in this 
            <a href="${process.env.FRONTEND_URL}/status/${no}" target="_blank">link</a>. We will also send you all the 
            updates in the mail. Your details we received are as follows.
        </p>
        <table>
            <tr><td>Category</td><td>${category}</td></tr>
            <tr><td>Title</td><td>${title}</td></tr>
            <tr><td>Description</td><td>${description}</td></tr>
            <tr><td>Status</td><td>${status}</td></tr>
            <tr><td>Contact Name</td><td>${name}</td></tr>
            <tr><td>Contact Email</td><td>${email}</td></tr>
            <tr><td>Contact Mobile</td><td>${mobile?mobile:"-"}</td></tr>
            <tr><td>Created Date</td><td>${createdAt}</td></tr>
        </table>
    </div>
    <br>
    <div>
        Thanks,
        <br>
        SR Team.
    </div>
</div>`
    await sendMail(email,html,subject)
}

export default {
    welcomeEmail
}