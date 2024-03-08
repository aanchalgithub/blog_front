import React from "react";
import PostAuthor from "../Components/PostAuthor";
import { Link } from "react-router-dom";
import Thumbnail from "../images/blog87.jpg";

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`/posts/werwer/delete`} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>This is the post title!</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          dignissimos! Doloremque deleniti temporibus quod, et eius mollitia
          ducimus dolor ipsam distinctio architecto nulla facilis perspiciatis
          iusto cumque quas. Alias sint libero placeat repellendus magni maxime
          velit a officiis. Iste, unde!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam vitae
          nesciunt cupiditate iste enim quae veritatis quos, dolores accusamus
          alias quia optio consequuntur, voluptate voluptates reiciendis animi
          rem! Sit, aliquam amet molestias, ipsa odit necessitatibus aut alias
          laboriosam commodi unde, excepturi explicabo distinctio similique
          delectus repellendus esse deserunt debitis id veniam! Quasi fuga quis
          veniam.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          magni debitis consequatur quas veniam consectetur distinctio accusamus
          porro at id, ex earum, veritatis sequi, accusantium fugiat itaque
          cupiditate. Veritatis aliquid nemo dolorum commodi dignissimos. Quis,
          pariatur! Eveniet perspiciatis molestiae quidem inventore veritatis
          autem repudiandae rerum debitis optio repellendus. Facilis, vero
          dolore necessitatibus suscipit itaque quas, quam nostrum quod
          reprehenderit amet tempora quidem laboriosam pariatur, odit ipsa
          consequatur excepturi illum quis hic aut numquam non nisi dolores
          asperiores. Tempora ipsum illum inventore facere soluta fuga ipsa.
          Nulla aliquid vel dolorem porro facilis fuga sequi necessitatibus vero
          corrupti sapiente, aliquam numquam commodi assumenda temporibus
          excepturi ipsam repellat vitae enim dignissimos dolore, natus veniam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo sed,
          unde error deserunt non vero. Consequuntur tempore nulla ea adipisci.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam,
          cumque unde expedita quaerat nam tempora illo aliquid quod saepe
          ratione, repellendus inventore error aut, quasi quia perferendis.
          Commodi, placeat beatae! Saepe, tempora dolores? Corporis suscipit
          animi obcaecati omnis hic soluta quas, id in illo! Doloribus numquam
          odit nesciunt consequuntur impedit fugit neque! Quam sit officia
          voluptatibus perferendis similique. Error sit corrupti, nam voluptate
          perferendis voluptatibus. Saepe sint esse autem architecto perferendis
          at neque molestias aperiam sunt libero accusantium sit quos velit
          earum, natus necessitatibus, voluptatum doloribus, nulla in corporis
          labore corrupti tempora consequatur totam! Nemo non, facere corporis
          eaque incidunt facilis, ad in nisi itaque, modi asperiores commodi!
          Mollitia minus aut odio sint fuga corrupti culpa illo reprehenderit,
          ratione placeat, repudiandae neque debitis nisi fugiat distinctio,
          commodi cumque dolorum. Dignissimos libero impedit commodi quod est
          odit deserunt laudantium, et ullam adipisci repellendus rerum
          asperiores laborum officiis! Distinctio dolores labore quibusdam
          voluptatibus iure veritatis consequuntur repellendus commodi! Quod
          eius accusamus exercitationem? Dolore repellendus sit ullam error,
          maxime accusamus ut. Ad ratione labore eveniet qui dolores at
          blanditiis incidunt debitis quibusdam voluptas, reprehenderit tempore
          atque maiores cumque aliquid commodi iste? Asperiores odio doloremque
          ducimus obcaecati cupiditate accusantium, placeat suscipit laboriosam
          molestiae distinctio.
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
