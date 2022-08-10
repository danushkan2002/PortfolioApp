from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

# Create your models here.

class UserAccountManager(BaseUserManager):

    def create_user(self, username, password=None):
        if not username:
            raise ValueError('User must have an username')
        
        user=self.model(
            username= username,
        )
        user.set_password(password)
        user.save()
        return user


    def create_superuser(self, username, password ):
        user = self.create_user(
            username = username,
            password = password,
        )

        user.is_admin = True
        user.is_active = True
        user.is_staff = True
        user.is_superadmin = True
        user.save()
        return user

class UserAccount(AbstractBaseUser):
    username = models.CharField(max_length=100, unique=True)
    mobile_number = models.CharField(max_length=10, blank=True, null=True)
    profile = models.ImageField(upload_to='profile/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    is_admin       =   models.BooleanField(default=False)
    is_staff       =   models.BooleanField(default=False)
    is_active      =   models.BooleanField(default=True)
    is_superadmin  =   models.BooleanField(default=False)

    objects         =   UserAccountManager()

    USERNAME_FIELD  =   'username'
    # REQUIRED_FIELDS = ['student_id', 'school_name', 'birth_year', 'phone_number']

    
    def __str__(self):
        return self.username

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, add_label):
        return True
