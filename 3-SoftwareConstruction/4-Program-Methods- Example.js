class User {
	constructor(email, password, username) {
		this.email = email;
		this.password = password;
		this.username = username;
	}
	
	// Вводимо інформацію о роботі
	enter_work_info(name, type, description, price){
		return new Work(name, type, description, price);	
	}
	
	// Підтвердження заванатаження роботи
	upload_work(){
		return true;	
	}
	
	// Вибір роботи
	choose_work(name){
		for work in work_array {
			if work.name == name return work; 
		}	
	}
	
	// Вибір системи оплати
	choose_payment_system(name){
		for payment_system in payment_system_array {
			if payment_system.name == name return payment_system; 
		}	
	}
	
	// Вибір розділу
	choose_section(type){
		for section in section_array {
			if section.type == type return section; 
		}	
	}
	
	// Підтвердження покупки
	confirm_payment(){
		return true;
	}
	
	// Підтвердження продажу
	confirm_sale(){
		return true;
	}
}
