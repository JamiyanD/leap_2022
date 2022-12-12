

let teacherDolgor = {
    firstName: `Dolgor`,
    lastName: `Dondog`,
    age: 35,
    experience: 10,
    children: [],
    isMarried: true,
    address: {
        discrict: `BGD`,
        khoroolol: `2-r`,
        khoroo: `1-r`,
        hourseNumber: `016`,
        doorNumber: `4`
    },
    GPA: 94.5,

    introduction: function () {
        console.log(`Minii neriig ${this.lastName}-iin ${this.firstName} gedeg. Bi ${this.age} nastai.
         Bi ${this.experience}-n jiliin ajliin turshlagatai. Bi ${this.address.discrict}-t amidardag.`);
    }
}
teacherDolgor.introduction();

let teacherDolgorClone = teacherDolgor;

teacherDolgorClone.firstName = `Dolgor Clone`;
console.log(teacherDolgor.firstName);
console.log(teacherDolgorClone.firstName);

let teacherDolgorRealClone = {...teacherDolgor};
teacherDolgorRealClone.firstName = `Dolgor  Real clone`;
console.log(teacherDolgorRealClone.firstName);
console.log(teacherDolgor.firstName);

console.log(Object.keys(teacherDolgor));
console.log(Object.values(teacherDolgor));



