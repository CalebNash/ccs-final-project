# Generated by Django 3.1.2 on 2020-11-06 17:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('locations', '0004_location_website'),
    ]

    operations = [
        migrations.AlterField(
            model_name='location',
            name='website',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
