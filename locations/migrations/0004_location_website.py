# Generated by Django 3.1.2 on 2020-11-06 16:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('locations', '0003_auto_20201106_1543'),
    ]

    operations = [
        migrations.AddField(
            model_name='location',
            name='website',
            field=models.CharField(max_length=255, null=True),
        ),
    ]