import { STRAPI } from '$env/static/private';
import nodemailer from "nodemailer"
import { MAIL_USER } from '$env/static/private';
import { MAIL_PASS } from '$env/static/private';
import { fail } from '@sveltejs/kit';

export const load = async () => {

  const hero = async () => {
    const heroData = await fetch(`${STRAPI}/api/hero?populate[0]=quotes&populate[1]=image`)
    return await heroData.json()
  }

  const about = async () => {
    const aboutData = await fetch(`${STRAPI}/api/about?populate[0]=part&populate[1]=part.image`)
    return await aboutData.json()
  }

  const products = async () => {
    const productsData = await fetch(`${STRAPI}/api/product-section?populate[0]=categories&populate[1]=categories.image`)
    return await productsData.json()
  }

  return { hero: hero(), about: about(), products: products()}
};

export const actions = {
  mail: async ({ request }) => {
    const data = await request.formData()
    const name = data.get("name")
    const email = data.get("email")
    const message = data.get("message")

    let transporter = nodemailer.createTransport({
      host: "sghomedecor.lv",
      port: 465,
      tls: {
        rejectUnauthorized: false
      },
      auth: {
        user: MAIL_USER,
        pass: MAIL_PASS,
      },
    });

    let info = transporter.sendMail({
      from: `${name} <${email}>`,
      to: "bardainaisarturs@gmail.com",
      subject: "Inquiry from sghomedecor.lv",
      text: `${message}`, // plain text body
    }, (error, info) => {
      if (error) {
        console.log(error)
        return fail(400, { sent: false });
      }
    });
  
  
  }
};