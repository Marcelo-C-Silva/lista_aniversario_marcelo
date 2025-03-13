const products = [
  { name: "Camiseta T-shirt Unissex Radiohead I Will See You PRETA", image: "img/3a719f2c3e88ca4ced0f385de796dab3.webp", link: "https://shopee.com.br/Camiseta-T-shirt-Unissex-Radiohead-I-Will-See-You-i.855513479.18549480235?sp_atk=5f16d9bb-cb55-4aa4-b815-fcb8678cb3ed&xptdk=5f16d9bb-cb55-4aa4-b815-fcb8678cb3ed" },
  { name: "Pentel Lapiseira Técnica Graphgear 500 0.5mm PRETA", image: "img/51MFyCgIT+L._AC_SL1000_.jpg", link: "https://www.amazon.com.br/Lapiseira-Graphgear-PG525-preta-unid/dp/B00DZTNRGC/ref=asc_df_B00DZTNRGC/?tag=googleshopp00-20&linkCode=df0&hvadid=709856906385&hvpos=&hvnetw=g&hvrand=16052781743139807816&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9101511&hvtargid=pla-865328407615&mcid=991a3b18e4913a28a9b1dea362fe7fc9&gad_source=4&th=1" },
  { name: "Estojo De Lápis De Tecido De Grande Capacidade Camada PRETO", image: "img/sg-11134201-7rfgt-m34518jlmb949c.webp", link: "https://shopee.com.br/Estojo-De-L%C3%A1pis-De-Tecido-De-Grande-Capacidade-Camada-Double-Sided-Pen-Bag-Pencil-Case-Escolar-Escrit%C3%B3rio-Faculdade-i.526625785.19399557020?sp_atk=875366e3-d3e0-4a2a-8d37-db9d9f104e41&xptdk=875366e3-d3e0-4a2a-8d37-db9d9f104e41" },
  { name: "Caneta De Destaque Branca De Alta Qualidade , 5 Peças", image: "img/6beca0a30128d901c01d1252b98b362d.webp", link: "https://shopee.com.br/Caneta-De-Destaque-Branca-De-Alta-Qualidade-5-Pe%C3%A7as-Pintura-Criativa-De-0.8mm-Gancho-De-design-Marca-Escola--i.1006215031.28169025148?sp_atk=0911eb39-ffca-48f5-83cb-626ef28237d1&xptdk=0911eb39-ffca-48f5-83cb-626ef28237d1" },
  { name: "Kit 6 Peças, Pincéis Aquabrush Pintura Desenho Aquarela", image: "img/br-11134207-7r98o-m5vonjqst8z63b.webp", link: "https://shopee.com.br/Kit-6-12-Pinc%C3%A9is-Aquabrush-Pintura-Desenho-Aquarela-Reservat%C3%B3rio-%C3%81gua-WaterBrush-Cerdas-Macias-i.351549429.23093685566?sp_atk=f6c00ad3-7a90-4de3-803c-2c470993fcf4&xptdk=f6c00ad3-7a90-4de3-803c-2c470993fcf4" },
  { name: "Bloco graduate aquarela A5 250g com 20 folhas Canson", image: "img/71RzJboTKdL._AC_SL1500_.jpg", link: "https://www.amazon.com.br/Canson-Graduate-Aquarela-Bloco-Folhas/dp/B08FBH8KYP/ref=asc_df_B08FBH8KYP/?tag=googleshopp00-20&linkCode=df0&hvadid=709856906328&hvpos=&hvnetw=g&hvrand=17195313577572357242&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9101511&hvtargid=pla-1082441006624&mcid=4aaaca8e29083447895b9160d369bdeb&gad_source=1&th=1" },
  { name: "CANSON Linha Universitária, Bloco de Papel A4 Para Aquarela, 12 Folhas de 300g/m²", image: "img/71JhpAk9J8L._AC_SL1500_.jpg", link: "https://www.amazon.com.br/CANSON-Bloco-Para-Aquarela-folhas/dp/B07843BCFN/ref=pd_ci_mcx_mh_mcx_views_0_image?pd_rd_w=zt8c2&content-id=amzn1.sym.555f13f7-45b6-473c-bea4-65b4c3d4edb6%3Aamzn1.symc.40e6a10e-cbc4-4fa5-81e3-4435ff64d03b&pf_rd_p=555f13f7-45b6-473c-bea4-65b4c3d4edb6&pf_rd_r=8Z417D2H2CQZ48J9JJBQ&pd_rd_wg=d6Yiv&pd_rd_r=18a61f76-7493-4d6c-bfe5-5fefefd4be1a&pd_rd_i=B07843BCFN&th=1" },
  { name: "60pcs Japão Bilhetes De Viagem , Selos Adesivos De PVC À Prova D'água", image: "img/carta_japonesa.webp", link: "https://shopee.com.br/product/742491620/26151677265?d_id=428cb&uls_trackid=52717vi4008l&utm_content=2jLUin86BVktEnwboFp9bLspRsnP" },
  { name: "50pcs Japan Signposts , Billboards E Bilhetes Adesivos De PVC À Prova D'água", image: "img/aviso_japones.webp", link: "https://shopee.com.br/product/742491620/25975025004?d_id=428cb&uls_trackid=5271869n017r&utm_content=2jLUin86BW4D5Fy3mFE2T6fiy5mh" }
];


const productList = document.getElementById("product-list");

products.forEach(product => {
  const card = `
      <div class="col-md-4 mb-4">
          <div class="card">
              <img src="${product.image}" class="card-img-top" alt="${product.name}">
              <div class="card-body text-center">
                  <h5 class="card-title">${product.name}</h5>
                  <a href="${product.link}" class="btn btn-primary" target="_blank">Ver produto</a>
              </div>
          </div>
      </div>
  `;
  productList.innerHTML += card;
});