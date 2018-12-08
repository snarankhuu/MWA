export class University {
    constructor(public name: string, public dept: string) { };
    graduation(year: number) {
        console.log(`Graduationg ${this.dept} ${year} students`);
    }
}
