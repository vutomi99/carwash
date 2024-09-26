import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { colors } from '../utils/colors';

const Main = () => {
  // Static data example for cars washed from Monday to Friday
  const carWashData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        data: [15, 20, 25, 22, 30], 
      },
    ],
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainTitle}>Admin Dashboard</Text>

      {/* Bar Chart for Cars Washed */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Cars Washed This Week</Text>
        <BarChart
          data={carWashData}
          width={Dimensions.get('window').width - 40} // Width of the chart
          height={220}
          yAxisLabel=""
          chartConfig={{
            backgroundColor: colors.primary,
            backgroundGradientFrom: colors.primary,
            backgroundGradientTo: colors.primary,
            decimalPlaces: 0, 
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: colors.secondary,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>

      {/* Placeholder for other content
      <View style={styles.card}>
        <Text style={styles.cardText}>Some other statistics or widgets go here</Text>
      </View> */}

      <View style={styles.card}>
        <Text style={styles.cardText}>More data or charts</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.primar,
    marginBottom: 20,
  },
  chartContainer: {
    backgroundColor: colors.primar,
    borderRadius: 16,
    padding: 15,
    marginBottom: 20,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.secondar,
    marginBottom: 10,
    textAlign: 'center',
  },
  card: {
    backgroundColor: colors.primar,
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Main;
