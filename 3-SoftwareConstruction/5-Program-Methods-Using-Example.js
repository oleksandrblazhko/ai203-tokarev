user_1 = new User("walterwhite308@gmail.com", "07091958", "Heisenberg")
user_2 = new User("saulgoodman0401@gmail.com", "918273645", "Call Saul")
user_3 = new User("jessepinkman@gmail.com", "12344567", "Capn Cook")

work_array = [];

work_array.append(user1.enter_work_info("FontName", "font", "Font for sale", 3));
work_array.append(user2.enter_work_info("PictureName", "picture", "Picture for sale", 5));
work_array.append(user3.enter_work_info("IconName", "icon", "Icon for sale", 2));
user2.choose_work("IconName");
user3.choose_work("FontName");
