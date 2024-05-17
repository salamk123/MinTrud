using System.ComponentModel.DataAnnotations;

namespace MinTrud.Models
{
    public class RegisterModel
    {
        [Required(ErrorMessage = "Не указана Фамилия")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Не указано Имя")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Не указано Отчество")]
        public string MiddleName { get; set; }

        [Required(ErrorMessage = "Не указано Отчество")]
        public string Phone { get; set; }

        [Required(ErrorMessage = "Не указан Email")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Не указан пароль")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "Пароли не совпадают")]
        [Required(ErrorMessage = "Пароль введен неверно")]
        public string ConfirmPassword { get; set; }
    }
}
