# README



DB設計

# members table

|Columm|Type|Options|
| :------------- | :------------- |:------------- |
|user_id|integer|null: false, foreign_key: true|


### Association
- belongs_to :users_table

# chat table
|Columm|Type|time|Type|articles|
| :------------- | :------------- |:------------- |
|chat_id|integer|time|string|articles|integer|user_id|

### Association
- belongs_to :user_id


# users table
|Columm|Type|email|password|chat_id|
| :------------- | :------------- |:------------- |
|id|string|email|string|password|integer|chat_id|

### Association
-belongs_to :chat table
