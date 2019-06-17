# README



DB設計

# users table
|Columm|Type|Options|
| :------------- | :------------- |:------------- |
|id|string|null: false, foreign_key: true|
|name|string|index: true,null: false, unique: true|




### Association
- has_many :chats
- has_many :groups

# members table

|Columm|Type|Options|
| :------------- | :------------- |:------------- |
|user_id|integer|null: false, foreign_key: true|


### Association
- belongs_to :user


# chats table
|Columm|Type|Options|
| :------------- | :------------- |:------------- |
|chat|text|null: false, foreign_key: true|
|image|string|null: true, foreign_key: false|



### Association
- belongs_to :user

# groups table
|Columm|Type|Options|
| :------------- | :------------- |:------------- |
|group_id|integer|null: false, foreign_key: true|

### Association
- has_many :users
