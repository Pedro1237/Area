import requests

# Configuração da API do Mapbox
mapbox_access_token = 'pk.eyJ1IjoicGVkcm8xMjM3IiwiYSI6ImNsbjJtMnJwZDAxZXMyaG8wcmdtNnVvZGMifQ.mW6RWfY5nSrXt1KUk-k7pw'
base_url = 'https://api.mapbox.com/directions/v5/mapbox/driving/'

# Coordenadas de origem e destino (latitude e longitude)
origem = '-22.902, -43.207'  # Exemplo: Rio de Janeiro
destino = '-23.550, -46.633'  # Exemplo: São Paulo

# Parâmetros da requisição
params = {
    'origin': origem,
    'destination': destino,
    'access_token': mapbox_access_token,
    'overview': 'full',
}

# Fazer a solicitação de rota à API do Mapbox
response = requests.get(base_url, params=params)
data = response.json()

# Verificar se a solicitação foi bem-sucedida
if response.status_code == 200:
    # Analisar a resposta para obter a rota segura
    rota_segura = data['routes'][0]['geometry']
    # Agora você pode exibir a rota segura no mapa ou fazer outras ações necessárias
else:
    print('Erro ao calcular a rota segura.')
