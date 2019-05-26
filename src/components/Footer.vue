var Header = {
<template>
<div class="footer">
  <div class="social-footer">
    <div class="social">
      <a href="mailto:jaween.ediriweera@gmail.com?Subject=Hello">
        <img class="icon" src="images/icons/email.png"/>
        <p>Email</p>
      </a>
    </div>
    <div class="social">
      <a href="https://github.com/jaween">
        <img class="icon" src="images/icons/github.png"/>
        <p>GitHub</p>
      </a>
    </div>
    <div class="social">
      <a href="https://twitter.com/jaweene">
        <img class="icon" src="images/icons/twitter.png"/>
        <p>Twitter</p>
      </a>
    </div>
    <div class="social">
      <a href="https://instagram.com/jaween_">
        <img class="icon" src="images/icons/instagram.png"/>
        <p>Instagram</p>
      </a>
    </div>
    <div class="social">
      <a href="files/resume.pdf">
        <img class="icon" src="images/icons/resume.png"/>
        <p>Resume</p>
      </a>
    </div>
  </div>
  <div class="last-updated">
      <p>Last update was in May 2019</p>
    </div>
</div>
</template>

<style scoped>
.footer {
  background-color: #FAFAFA;
  border-top: 1px solid #E0E0E0;
  padding-top: 1rem;
  text-align: center;
}

.social-footer {
  display: flex;
  justify-content: center;
}

.social {
  text-align: center;
  margin-left: 1rem;
  margin-right: 1rem;
}

img {
  opacity: 0.5;
}

.social:hover img {
  opacity: 0.9;
}

.icon {
  width: 2rem;
  margin-bottom: 0.5rem;
}

.last-updated {
  color: grey;
}
</style>
}