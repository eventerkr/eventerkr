# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Artist(models.Model):
    id = models.IntegerField(db_column='Id', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=256)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Artist'


class Location(models.Model):
    id = models.IntegerField(db_column='Id', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=256)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Location'


class Event(models.Model):
    id = models.IntegerField(db_column='Id', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=256)  # Field name made lowercase.
    date = models.DateTimeField(db_column='Date', blank=True, null=True)  # Field name made lowercase.
    #locationid = models.CharField(db_column='LocationId', max_length=45, blank=True, null=True)  # Field name made lowercase.
    locationid = models.ForeignKey(Location, db_column='LocationId', on_delete=models.CASCADE, max_length=45, blank=True, null=True)  # Field name made lowercase.
    parentid = models.CharField(db_column='ParentId', max_length=45, blank=True, null=True)  # Field name made lowercase.
    eventstatusid = models.CharField(db_column='EventStatusId', max_length=45)  # Field name made lowercase.
    artists = models.ManyToManyField(Artist, through='Eventartistrel')

    class Meta:
        managed = False
        db_table = 'Event'


class Eventartistrel(models.Model):
    id = models.IntegerField(db_column='Id', primary_key=True)  # Field name made lowercase.
    #eventid = models.CharField(db_column='EventId', primary_key=True, max_length=45)  # Field name made lowercase.
    eventid = models.ForeignKey(Event, db_column='EventId', on_delete=models.CASCADE, max_length=45)  # Field name made lowercase.
    #artistid = models.CharField(db_column='ArtistId', max_length=45)  # Field name made lowercase.
    artistid = models.ForeignKey(Artist, db_column='ArtistId', on_delete=models.CASCADE, max_length=45)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'EventArtistRel'
        unique_together = (('eventid', 'artistid'),)


class Eventstatus(models.Model):
    id = models.IntegerField(db_column='Id', primary_key=True)  # Field name made lowercase.
    desc = models.CharField(db_column='Desc', max_length=256)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'EventStatus'


class User(models.Model):
    id = models.IntegerField(db_column='Id', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=45)  # Field name made lowercase.
    intro = models.TextField(db_column='Intro', blank=True, null=True)  # Field name made lowercase.
    twitter = models.CharField(db_column='Twitter', max_length=45, blank=True, null=True)  # Field name made lowercase.
    eventernote = models.CharField(db_column='Eventernote', max_length=45, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'User'


class Usereventrel(models.Model):
    id = models.IntegerField(db_column='Id', primary_key=True)  # Field name made lowercase.
    #userid = models.CharField(db_column='UserId', primary_key=True, max_length=45)  # Field name made lowercase.
    userid = models.ForeignKey(User, on_delete=models.CASCADE, db_column='UserId', max_length=45)  # Field name made lowercase.
    #eventid = models.CharField(db_column='EventId', max_length=45)  # Field name made lowercase.
    eventid = models.ForeignKey(Event, on_delete=models.CASCADE, db_column='EventId', max_length=45)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'UserEventRel'
        unique_together = (('userid', 'eventid'),)
