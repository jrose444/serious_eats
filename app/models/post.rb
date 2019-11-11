class Post < ApplicationRecord

    validates :title, presence: true

    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

    has_one_attached :photo

end
