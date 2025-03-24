class Employee {
  #salary;

  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.salary = salary;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (typeof value !== 'string') {
      throw new Error('First name must be a string');
    }

    if (!/^[A-Za-z]{2,50}$/.test(value)) {
      throw new Error('First name must be 2-50 Latin letters');
    }

    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (typeof value !== 'string') {
      throw new Error('Last name must be a string');
    }
  
    if (!/^[A-Za-z]{1,50}$/.test(value)) {
      throw new Error('Last name must be 1-50 Latin letters');
    }
  
    this._lastName = value;
  }
  

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (typeof value !== 'string') {
      throw new Error('Profession must be a string');
    }

    if (!/^[A-Za-z ]+$/.test(value.trim())) {
      throw new Error('Profession must contain only Latin letters and spaces');
    }

    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }

    set salary(value) {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new Error('Salary must be a valid number');
    }

    if (value <= 0 || value >= 10000) {
      throw new Error('Salary must be greater than 0 and less than 10000');
    }

    this.#salary = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Company {
  #employees;

  constructor(title, phone, address) {
    this.title = title;
    this.phone = phone;
    this.address = address;
    this.#employees = [];
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (typeof value !== 'string') {
      throw new Error('Title must be a string');
    }
    this._title = value;
  }

  get phone() {
    return this._phone;
  }

  set phone(value) {
    if (typeof value !== 'string') {
      throw new Error('Phone must be a string');
    }
    this._phone = value;
  }

  get address() {
    return this._address;
  }

  set address(value) {
    if (typeof value !== 'string') {
      throw new Error('Address must be a string');
    }
    this._address = value;
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error('Must be an instance of Employee');
    }

    this.#employees.push(employee);
    console.log(`Employee ${employee.firstName} ${employee.lastName} added to ${this.title}`);
  }

  getEmployees() {
    return this.#employees;
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

  findEmployeeByName(firstName) {
    const employee = this.#employees.find((emp) => emp.firstName === firstName);

    if (!employee) {
      throw new Error(`Employee with the name "${firstName}" not found`);
    }

    return employee;
  }

  #getEmployeeIndex(firstName) {
    return this.#employees.findIndex(emp => emp.firstName === firstName);
  }

  removeEmployee(firstName) {
    const index = this.#getEmployeeIndex(firstName);
    if (index === -1) {
      throw new Error(`Employee ${firstName} not found.`);
    }
    this.#employees.splice(index, 1);
  }

  getTotalSalary() {
    return this.#employees.reduce((sum, employee) => sum + employee.salary, 0);
  }
  
}

export { Employee, Company };
