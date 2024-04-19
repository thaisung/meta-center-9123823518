import geoip2.database

def get_country_info(ip):
    reader = geoip2.database.Reader('GeoLite2-Country.mmdb')
    try:
        response = reader.country(ip)
        country_name = response.country.name
        country_code = response.country.iso_code
        print(f"Địa chỉ IP {ip} thuộc quốc gia {country_name} ({country_code})")
    except geoip2.errors.AddressNotFoundError:
        print(f"Không thể xác định thông tin quốc gia cho địa chỉ IP {ip}")

# Kiểm tra quốc gia và mã quốc gia của địa chỉ IP
get_country_info("193.9.20.49")
