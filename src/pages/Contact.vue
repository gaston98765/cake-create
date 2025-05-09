
<template>
  <div class="contact-page">
    <h1>📩 Contact Us</h1>
    <p>Have a question? Reach out to us!</p>

    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" placeholder="Your Name" required>
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" placeholder="Your Email" required>
      </div>

      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="message" placeholder="Write your message here..." required></textarea>
      </div>

      <button type="submit" class="btn btn-primary">Send Message</button>
    </form>

    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
  </div>
</template>

    <script setup>
    import { ref } from 'vue';
    import '@/styles/contact.css';  
    
    const name = ref('');
    const email = ref('');
    const message = ref('');
    const successMessage = ref('');
    
    const submitForm = () => {
      if (!name.value || !email.value || !message.value) {
        successMessage.value = '❌ Please fill in all fields!';
        return;
      }
    
      console.log('Form Submitted:', { name: name.value, email: email.value, message: message.value });
      
      successMessage.value = '✅ Your message has been sent successfully!';
      
      name.value = '';
      email.value = '';
      message.value = '';
    };
    </script>