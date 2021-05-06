<template>
  <div>
    <course-categories />
    <hr />
    <course-categories2/>
    
  </div>
</template>

<script>
import CourseCategories from "../components/CourseCategories";
import CourseCategories2 from "../components/CourseCategories2";


export default {
  name: "Courses",
  components: {
    CourseCategories,
    CourseCategories2
    
  }
};
</script>

<style lang="scss" scoped>
.next-steps {
  .fa-link {
    margin-right: 5px;
  }
}
</style>
