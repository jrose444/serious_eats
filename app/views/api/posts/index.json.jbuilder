@posts.each do |post|
    json.set! post.id do
        json.extract! post, :id, :title, :author_id, :body, :tagline, :ingredients, :directions
        if(post.photo.attached?)
            json.photo_url url_for(post.photo)
        else
            json.photo_url ""
        end
    end

end
