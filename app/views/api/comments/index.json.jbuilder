@comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :id, :post_id, :user_id, :body, :created_at, :author
    end
end