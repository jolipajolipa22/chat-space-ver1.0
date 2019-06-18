# README



DB設計

# users table
|Columm|Type|Options|
| :------------- | :------------- |:------------- |
|id|string|null: false, foreign_key: true|
|name|string|index: true,null: false, unique: true|




### Association
- has_many :messages
- has_many :groups, through: :users_groups
- has_many :users_groups

# messages table

|Columm|Type|Options|
| :------------- | :------------- |:------------- |
|user|references|foreign_key: true,null: false|
|group|references|foreign_key: true,null: false|
|comment|text| |
|image|string| |
### Association
- belongs_to :user
- belongs_to :group



# users_groups table
|Columm|Type|Options|
| :------------- | :------------- |:------------- |
|user|references|foreign_key: true,null: false|
|group|references|foreign_key: true,null: false|



### Association
- belongs_to :user
- belongs_to :group

# groups table
|Columm|Type|Options|
| :------------- | :------------- |:------------- |
|name|string|index: true,null: false, unique: true|

### Association
- has_many :users_groups
- has_many :messages
