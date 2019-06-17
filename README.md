# README



DB設計

# users table
|Columm|Type|user|
| :------------- | :------------- |:------------- |
|id|string|null: false, foreign_key: true|

### Association
-has_many :chats

# members table

|Columm|Type|Options|
| :------------- | :------------- |:------------- |
|user_id|integer|null: false, foreign_key: true|


### Association
- belongs_to :users_table
- has_many :users

# chats table
|Columm|Type|Options|
| :------------- | :------------- |:------------- |
|chat|text|null: false, foreign_key: true|

### Association
- belongs_to :users



