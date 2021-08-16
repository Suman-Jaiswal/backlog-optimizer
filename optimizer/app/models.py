from django.db import models
from multiselectfield import MultiSelectField

# Create your models here.
COURSE_CODE = (
    ('EE 201', 'EE 201'),
    ('EE 203', 'EE 203'),
    ('EE 205', 'EE 205'),
    ('EE 253', 'EE 253'),
    ('MA 203', 'MA 203'),
    ('IC 211', 'IC 211'),
)
DAYS_OF_WEEK = (
    ('Monday', 'Monday'),
    ('Tuesday', 'Tuesday'),
    ('Wednesday', 'Wednesday'),
    ('Thursday', 'Thursday'),
    ('Friday', 'Friday'),
    ('Saturday', 'Saturday'),
    ('Sunday', 'Sunday'),
)


class Course(models.Model):
    week = models.IntegerField()
    code = models.CharField(max_length=10, choices=COURSE_CODE)
    day = MultiSelectField(max_length=100, choices=DAYS_OF_WEEK)
    done = models.BooleanField(default=False)
    pending = models.BooleanField(default=True)

    def __str__(self):
        return self.code
