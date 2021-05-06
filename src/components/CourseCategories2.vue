<template>
  <div class="next-steps">
  
    <div class="row">
      <div class="col-md-5 mb-4">
        <h6 class="mb-3">
          <router-link to= "/Business">
            <font-awesome-icon icon="link" class="mr-2" />Business
          </router-link>
        </h6>
        <p>The branch of science that deals with the identification of the substances of which matter is composed; the investigation of their properties and the ways in which they interact, combine, and change; and the use of these processes to form new substances.</p>
      </div>


      

      <div class="col-md"></div>

      <div class="col-md-5 mb-4">
        <h6 class="mb-3">
         <router-link to= "/SocialStudies">
            <font-awesome-icon icon="link" class="mr-2" />Social Studies
         </router-link>
        </h6>
        <p>Learn American and World Hsitory</p>
      </div>
    </div>

    

    <div class="row">
      <div class="col-md-5 mb-4">
        <h6 class="mb-3">
          <router-link to= "/Language">
            <font-awesome-icon icon="link" class="mr-2" />Foreign Languages
          </router-link>
        </h6>
        <p>Learn one of 10 languages offered  </p>
      </div>

      <div class="col-md"></div>

      <div class="col-md-5 mb-4">
        <h6 class="mb-3">
         <router-link to= "/ComputerScience">
            <font-awesome-icon icon="link" class="mr-2" />Computer science
         </router-link>
        </h6>
        <p>We provide extensive help with any subjects you may be struggling with</p>
      </div>

      
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseCategories2"
};
</script>
