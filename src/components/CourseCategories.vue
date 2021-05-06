<template>
  <div class="next-steps">
    <h2 class="my-5 text-center"> Welcome {{$auth.user.name}} </h2>

    <div class="row">
      <div class="col-md-5 mb-4">
        <h6 class="mb-3">
         <router-link to= "/Sciences">
            <font-awesome-icon icon="link" class="mr-2" />Sciences
          </router-link>
        </h6>
        <p>The branch of science concerned with the nature and properties of matter and energy. The subject matter of physics, distinguished from that of chemistry and biology, includes mechanics, heat, light and other radiation, sound, electricity, magnetism, and the structure of atoms.</p>
      </div>

      <div class="col-md"></div>

      <div class="col-md-5 mb-4">
        <h6 class="mb-3">
         <router-link to= "/English">
            <font-awesome-icon icon="link" class="mr-2" />English
         </router-link>
        </h6>
        <p>Improve your ability to write and learn amazing skills </p>
      </div>
    </div>

    <div class="row">
      <div class="col-md-5 mb-4">
        <h6 class="mb-3">
          <router-link to= "/Math">
            <font-awesome-icon icon="link" class="mr-2" />Math
          </router-link>
        </h6>
        <p>Mathematics includes the study of such topics as quantity, structure, space, and change.  </p>
      </div>

      <div class="col-md"></div>

      <div class="col-md-5 mb-4">
        <h6 class="mb-3">
          <router-link to= "/APCourses">
            <font-awesome-icon icon="link" class="mr-2" />Advanced Placement Courses
          </router-link>
        </h6>
        <p> Get help for nay nationally offered advanced placement course </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseCategories"
};
</script>
