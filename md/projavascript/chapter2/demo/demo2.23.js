function Classroom(students, teacher) {
	function display() {
		console.log(this.students.join(' '));
	}
	this.students = students;
	this.teacher = teacher;

	display();
}

var classroom = new Classroom(['John', 'Bob'], 'Mr. Smith');
// Fail
class.display();
