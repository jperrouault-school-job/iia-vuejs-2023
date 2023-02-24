export default {
  mounted: (el, binding) => {
    if (binding.arg === 'Jérémy') {
      el.remove();
    }
    console.log("MONTAGE DIRECTIVE");
    console.log(el);
    console.log(binding);
  }
}