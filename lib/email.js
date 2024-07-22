import emailjs from 'emailjs-com';

export const sendEmail = async (formData) => {
    try {
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        const result = await emailjs.send(
            'service_fhf0mgo',
            'template_t2i18ra',
            data,
            'SQrKVSZiH1F376rhX'
        );
        console.log('Email sent successfully:', result);
        return { success: true };
    } catch (error) {
        console.error('EmailJS error:', error);
        return { success: false, error };
    }
};
