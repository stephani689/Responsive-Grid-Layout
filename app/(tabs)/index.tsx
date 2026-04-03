import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  SafeAreaView, 
  Image, 
  TouchableOpacity 
} from 'react-native';

export default function TechGearsStore() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* --- HEADER --- */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>TechGears Store</Text>
        </View>

        {/* --- PRODUCT GRID - BARIS 1 --- */}
        <View style={styles.row}>
          {/* Produk 1: Speaker */}
          <View style={styles.card}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>ON SALE</Text>
            </View>
            <Image 
              source={require('../../assets/images/speaker.jpg')} 
              style={styles.productImage} 
            />
            <View style={styles.infoContainer}>
              <Text style={styles.productName}>Speaker Wireless</Text>
              <Text style={styles.productPrice}>Rp 250.000</Text>
            </View>
            <TouchableOpacity style={styles.buyButton} activeOpacity={0.7}>
              <Text style={styles.buyButtonText}>Beli</Text>
            </TouchableOpacity>
          </View>
          
          {/* Produk 2: Samsung */}
          <View style={styles.card}>
            <Image 
              source={require('../../assets/images/handphone.jpg')} 
              style={styles.productImage} 
            />
            <View style={styles.infoContainer}>
              <Text style={styles.productName}>Samsung S25</Text>
              <Text style={styles.productPrice}>Rp 15.000.000</Text>
            </View>
            <TouchableOpacity style={styles.buyButton} activeOpacity={0.7}>
              <Text style={styles.buyButtonText}>Beli</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* --- PRODUCT GRID - BARIS 2 --- */}
        <View style={styles.row}>
          {/* Produk 3: Kipas */}
          <View style={styles.card}>
            <Image 
              source={require('../../assets/images/kipas.jpg')} 
              style={styles.productImage} 
            />
            <View style={styles.infoContainer}>
              <Text style={styles.productName}>Kipas Portable</Text>
              <Text style={styles.productPrice}>Rp 150.000</Text>
            </View>
            <TouchableOpacity style={styles.buyButton} activeOpacity={0.7}>
              <Text style={styles.buyButtonText}>Beli</Text>
            </TouchableOpacity>
          </View>
          
          {/* Produk 4: Kipas Duduk */}
          <View style={styles.card}>
            <Image 
              source={require('../../assets/images/kipas_duduk.png')} 
              style={styles.productImage} 
            />
            <View style={styles.infoContainer}>
              <Text style={styles.productName}>Kipas</Text>
              <Text style={styles.productPrice}>Rp 180.000</Text>
            </View>
            <TouchableOpacity style={styles.buyButton} activeOpacity={0.7}>
              <Text style={styles.buyButtonText}>Beli</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f2ff', // Latar belakang biru muda
  },
  scrollContent: {
    paddingBottom: 30,
  },
  header: {
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    elevation: 4,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004080',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center', // Agar kartu kumpul di tengah
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#fff',
    width: 165, // Lebar kotak tetap agar stabil
    height: 270, // Tinggi ditambah agar muat semua elemen
    marginHorizontal: 8,
    borderRadius: 20,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'space-between', // Memberi jarak merata atas-tengah-bawah
    elevation: 5,
    position: 'relative',
    overflow: 'hidden',
  },
  productImage: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    marginTop: 10,
  },
  infoContainer: {
    alignItems: 'center',
    marginVertical: 5,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 13,
    color: '#004080',
    fontWeight: '700',
    marginTop: 4,
  },
  buyButton: {
    backgroundColor: '#004080',
    width: '100%',
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  badge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#ff4444',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    zIndex: 10,
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});