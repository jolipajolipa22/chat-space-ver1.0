# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

DB設計

#＃ members table
-ユーザーid
-|Columm|Type|Options|
-|————|——-|————|
-|user_id|integer|null: false, foreign_key: true|


###Association
- belongs_to :users_table

# chat table
-本文、時間、ユーザーid
-|Columm|Type|time|Type|articles|
-|――――|――-|――――|―――|――――|
-|chat_id|integer|time|string|articles|integer|user_id|

###Association
- belongs_to :user_id

