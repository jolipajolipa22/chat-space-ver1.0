# README



DB設計

# users table
|Columm|Type|Options|
| :------------- | :------------- |:------------- |
|id|string|null: false, foreign_key: true|
|name|string|index: true,null: false, unique: true|




### Association
- has_many :chats, through: :users_groups
- has_many :groups, through: :users_groups
- has_many :member

# messages table

|Columm|Type|Options|
| :------------- | :------------- |:------------- |
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|comment|text|null: true, foreign_key: false|
### Association
- belongs_to :user, through: :users_groups



# users_groups table
|Columm|Type|Options|
| :------------- | :------------- |:------------- |
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|chat|text|null: false, foreign_key: true|
|image|string|null: true, foreign_key: false|



### Association
- belongs_to :user
- belongs_to :group

# groups table
|Columm|Type|Options|
| :------------- | :------------- |:------------- |
|name|string|index: true,null: false, unique: true|

### Association
- has_many :users, through: :users_groups
- has_many :members
